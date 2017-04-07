package de.springboot.service;

import de.springboot.model.StackOverflowWebSite;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Анастасия on 07.04.2017.
 */
@Service
public class StackOverflowService {
    private static List<StackOverflowWebSite> items = new ArrayList<>();
    static {
        items.add(new StackOverflowWebSite("1234","Website1", "http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico","FIRST","Example"));
        items.add(new StackOverflowWebSite("1235","Website2", "http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico","SECOND","Example"));
        items.add(new StackOverflowWebSite("1236","Website3", "http://cdn.sstatic.net/Sites/stackoverflow/img/favicon.ico","THERTH","Example"));
    }

    public List<StackOverflowWebSite> findAll() {
        return items;
    }
}
