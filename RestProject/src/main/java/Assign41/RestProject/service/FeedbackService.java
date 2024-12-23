package Assign41.RestProject.service;

import java.util.List;

import Assign41.RestProject.model.Feedback;



public interface FeedbackService {
	Feedback insertrecord(Feedback r);
	List<Feedback>getAll();
	void del(int ri);
	Feedback updaterecord(int i,Feedback r);
}
