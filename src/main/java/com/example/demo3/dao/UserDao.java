package com.example.demo3.dao;

import com.example.demo3.model.User;

import java.util.List;

public interface UserDao {

    User findByLastName(String lastname);
    User findByLastName2(String lastname);


    User findById(Long id);

    List<User> findAll();

    void saveUser(User user);

    void deleteById(Long id);
    void deleteUser(User user);


    void updateUser(User user);


}

