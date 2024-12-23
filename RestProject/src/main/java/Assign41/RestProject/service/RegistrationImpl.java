package Assign41.RestProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import Assign41.RestProject.model.Registration;
import Assign41.RestProject.repository.RegistrationRepository;



@Service
public class RegistrationImpl implements RegistrationService{
@Autowired
@Qualifier("regRepo")
private RegistrationRepository regRepo;

@Override
public Registration insertrecord(Registration r) {
	
	return regRepo.save(r);
}

@Override
public List<Registration> getAll() {
	
	return regRepo.findAll();
}

@Override
public void del(int ri) {
regRepo.deleteById(ri);	
	
} 

@Override
public Registration updaterecord(int i,Registration r) {
Optional <Registration> opt=regRepo.findById(r.getRegid());
if(opt.isPresent())
{
	Registration rold=opt.get();
	rold.setName(r.getName());
	rold.setAddress(r.getAddress());
	rold.setCity(r.getCity());
	rold.setGender(r.getGender());
	rold.setContact(r.getContact());
	rold.setEmailid(r.getEmailid());
	rold.setPassword(r.getPassword());
	return regRepo.save(rold);
}
	return null;
}

@Override
public List<Registration> Login(String emailid, String password) {
	// TODO Auto-generated method stub
	return regRepo.findAllByEmailidAndPassword(emailid, password);
}
}

 