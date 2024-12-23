package Assign41.RestProject.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import Assign41.RestProject.model.Feedback;
import Assign41.RestProject.model.Registration;
import Assign41.RestProject.repository.FeedbackRepository;
import Assign41.RestProject.repository.RegistrationRepository;

@Service
public class FeedbackImpl implements FeedbackService {

	@Autowired
	@Qualifier("feedRepo")
	private FeedbackRepository feedRepo;

	
	@Override
	public Feedback insertrecord(Feedback r) {
		
		return feedRepo.save(r);
	}

	@Override
	public List<Feedback> getAll() {
		
		return feedRepo.findAll();
	}

	@Override
	public void del(int ri) {
		feedRepo.deleteById(ri);
	}

	@Override
	public Feedback updaterecord(int i, Feedback r) {
		
		Optional <Feedback> opt=feedRepo.findById(i);
		if(opt.isPresent())
		{
			Feedback rold=opt.get();
			
			rold.setEmailid(r.getEmailid());
			rold.setMessage(r.getMessage());
			return feedRepo.save(rold);
		}
			return null;
	}
	

}
