package com.ambegodas.maxpos.controller.test;

import static org.hamcrest.Matchers.endsWith;
import static org.hamcrest.Matchers.hasItem;
import static org.hamcrest.Matchers.is;
//import static org.mockito.Matchers.any;
//import static org.mockito.Matchers.eq;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.junit.Before;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import com.ambegodas.maxpos.controller.ProductController;
import com.ambegodas.maxpos.model.Product;
import com.ambegodas.maxpos.service.ProductService;

/**
 * @author Pathmasri Ambegoda
 */
public class ProductControllerTest {
	
	@InjectMocks
	private ProductController productController;
	
	@Mock
	private ProductService productService;
	
	private MockMvc mockMvc;
	
	@Before
	public void setUp(){
		MockitoAnnotations.initMocks(this);
		mockMvc = MockMvcBuilders.standaloneSetup(productController).build();
	}
	
	public void gerProduct() throws Exception{
		Product product = new Product(1,"firstProduct",2D);
		
		product.setProductId(1);
		product.setProductName("Rice");
		
		when(productService.getProduct(1)).thenReturn(product);
		
		mockMvc.perform(get("/rest/blog-entries/1"))
		.andDo(print())
		.andExpect(jsonPath("$.title", is(product.getProductName())))
		.andExpect(jsonPath("$.links[*].href",hasItem(endsWith("/blog-entries/1"))))
		.andExpect(status().isOk());	
	}
	

}
