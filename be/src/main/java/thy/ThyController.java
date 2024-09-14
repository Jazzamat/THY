package thy;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ThyController {


    @GetMapping("/new")
    public Todo newTodo(@RequestParam(value = "content") String content) {
        return new Todo(content);
    }
    
}
