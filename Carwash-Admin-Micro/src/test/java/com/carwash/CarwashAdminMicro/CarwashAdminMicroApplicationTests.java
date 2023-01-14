package com.carwash.CarwashAdminMicro;

import com.carwash.CarwashAdminMicro.Repository.washPackRepository;
import com.carwash.CarwashAdminMicro.controller.adminController;
import com.carwash.CarwashAdminMicro.models.washPack;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.stream.Stream;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;

@SpringBootTest
class CarwashAdminMicroApplicationTests {

	@Autowired
	adminController ac;
	@MockBean
	washPackRepository wr;

	@Test
	public void findallWpTest(){
		when(wr.findAll()).thenReturn(Stream.of(
				new washPack("1","p1",80,"ghhh"),
				new washPack("1","p1",80,"ghhh"),
				new washPack("1","p1",80,"ghhh")
		).collect(Collectors.toList()));
		assertEquals(3,ac.findallWp().size());
	}

	@Test
	public void findWpByIdTest(){
		washPack wp = new washPack("1","p1",80,"ghhh");
		when(wr.findById("1")).thenReturn(Optional.of(wp));
		assertEquals(wp,ac.findWpById("1").getBody());
	}



	@Test
	public void deleteByIdTest(){
		when(wr.findById("1")).thenReturn(Optional.of(new washPack("1","p1",80,"ghhh")));
		Map<String, Boolean> response = new HashMap<>();
		response.put("Wash pack deleted",Boolean.TRUE);
		assertEquals(response,ac.deleteById("1").getBody());
	}


		@Test
	void contextLoads() {
	}

}
