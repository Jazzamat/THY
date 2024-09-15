package thy;

import java.net.URI;
import java.util.Optional;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThyController {

	private final ThyService service;

	public ThyController(final ThyService service) {
		this.service = service;
	}

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Todo>> findAll() {
		return ResponseEntity.ok(service.findAll());
	}


	@GetMapping(value = "/{product_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Optional<Todo>> get(@PathVariable("todo_id") String todo_id) {
		return ResponseEntity.ok(service.get(Long.valueOf(todo_id)));
	}


	@DeleteMapping(value = "/{product_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<String> delete(@PathVariable("todo_id") String todo_id) {
		try {
			service.delete(Long.valueOf(todo_id));
		} catch (Exception e){
			System.out.println("What you are trying to delte doesn't exist");
			return ResponseEntity.ok("Not found");
		}
		return ResponseEntity.ok(todo_id);
	}

	@CrossOrigin(origins = "http://127.0.0.1:3000")
	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Todo> create(@RequestBody Todo todo) {
		Todo savedTodo = service.save(todo);
		return ResponseEntity.created(URI.create("/" + todo.getId())).body(savedTodo);
	}


	@GetMapping("/")
	public String landingPage(){
		return new String("Welcome to the THY TODO API");
	}

	@GetMapping("/new")
	public Todo newTodo(@RequestParam(value = "content") String content) {
		return new Todo(content);
	}
}
