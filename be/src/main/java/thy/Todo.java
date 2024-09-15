package thy;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Todo {
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long id;
	private String content;

	public Todo(String content) {
		this.content = content;
	}


	public Long getId() {
		return id;
	}

	public String getContent() {
		return content;
	}

	public void setContent(String content) {
		this.content = content;
	}
}
