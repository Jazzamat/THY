package thy;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ThyService {


	@Autowired
	private TodoRepository repository;


	public Long getId(Todo entity) {
		return entity.getId();
	}

	public Iterable<Todo> findAll() {
		return repository.findAll();
	}


	public Optional<Todo> get(Long id) {
		return repository.findById(id);
	}
	
	public Todo save(Todo entity) {
		return repository.save(entity);
	}
	
	public void delete(Long id) throws Exception {
		if (repository.existsById(id)) {
			repository.deleteById(id);;
		}
		else {
			throw new Exception("Todo 'id' doesn't exists: " + id);
		}
	}
	
	public void update(Long id, String newContent) throws Exception {
		if (repository.existsById(id)) {
			Todo todo = getRepository().findById(id).get();
			todo.setContent(newContent);
			getRepository().save(todo);



		}
		else {
			throw new Exception("Can't update Todo because it doesn't exist in DB -> Todo with Id: " + id);
		}
	}

	public CrudRepository<Todo, Long> getRepository() {
		return this.repository;
	}
} 
