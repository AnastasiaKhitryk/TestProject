package de.springboot.web;

import de.springboot.model.StackOverflowWebSite;
import de.springboot.service.StackOverflowService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by Анастасия on 07.04.2017.
 */
@RestController
@RequestMapping("/api/stackoverflow")
public class StackOverflowController {
    @Autowired
    private StackOverflowService stackOverflowService;

    @RequestMapping
    public List<StackOverflowWebSite> listOfProviders(){
        return stackOverflowService.findAll();
    }
}
