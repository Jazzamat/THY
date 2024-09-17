package thy;

import java.util.Optional;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class ThyController {

	@Autowired
	private final ThyService service;

	public ThyController(final ThyService service) {
		this.service = service;
	}

	@GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Todo>> findAll() {
		System.out.println("Sending All Todos...");
		return ResponseEntity.ok(service.findAll());
	}

	@GetMapping(value = "/{todo_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Optional<Todo>> get(@PathVariable("todo_id") String todo_id) {
		return ResponseEntity.ok(service.get(Long.valueOf(todo_id)));
	}

	@DeleteMapping(value = "/{todo_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Todo>> delete(@PathVariable("todo_id") String todo_id) {
		System.out.println("Attempting to Delete...");
		try {
			service.delete(Long.valueOf(todo_id));
		} catch (Exception e){
			System.out.println("What you are trying to delte doesn't exist");
			return ResponseEntity.ok(service.findAll());
		}
		System.out.println("Deleted Todo");
		return ResponseEntity.ok(service.findAll());
	}

	@PostMapping(consumes = MediaType.APPLICATION_JSON_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Todo>> create(@RequestBody Todo todo) {
		service.save(todo);
		System.out.println("Todo created and saved");
		return ResponseEntity.ok(service.findAll());
	}

	@PutMapping(value = "/{todo_id}", produces = MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Iterable<Todo>> update(@PathVariable("todo_id") String todo_id, @RequestBody String newContentJson) {
		System.out.println("Attempting to Edit...");
		try {

			System.out.println("Here is the json: ");
			System.out.println(newContentJson);
			JSONObject obj = new JSONObject(newContentJson);
			String newContent = obj.getString("newContent");


			service.update(Long.valueOf(todo_id), newContent);
		} catch (Exception e) {
			System.out.println("What you are trying to update doesn't exist");
			return ResponseEntity.ok(service.findAll());
		}
		System.out.println("Edited Todo");
		return ResponseEntity.ok(service.findAll());

	}

}
