package com.niit.userserviceusingjwt.service;

import com.niit.userserviceusingjwt.exception.ServiceProviderAlreadyExist;
import com.niit.userserviceusingjwt.exception.UserAlreadyExistException;
import com.niit.userserviceusingjwt.exception.UserNotFoundException;
import com.niit.userserviceusingjwt.model.ServiceProvider;
import com.niit.userserviceusingjwt.model.User;

import java.util.List;
import java.util.Map;

public interface UserService {

    User saveUser(User user) throws UserAlreadyExistException;
    User findByEmailAndPassword(String email,String password) throws UserNotFoundException;

  List<User> getAllUsers();
    ServiceProvider findByServiceEmailAndPassword(String email,String password) throws ServiceProviderAlreadyExist;

  ServiceProvider saveServiceProvider(ServiceProvider serviceProvider) throws ServiceProviderAlreadyExist;
}
