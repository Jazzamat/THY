package thy;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Service;

@Service
public class ThyService {


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
	
	public void update(Todo entity) throws Exception {
		if (repository.existsById(getId(entity))) {
			getRepository().save(entity);
		}
		else {
			throw new Exception("Can't update Rating because it doesn't exist in DB: " + entity);
		}
	}

	public CrudRepository<Todo, Long> getRepository() {
		return this.repository;
	}
	

} 
