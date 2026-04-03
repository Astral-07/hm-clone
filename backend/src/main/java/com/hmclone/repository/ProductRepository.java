package com.hmclone.repository;

import com.hmclone.model.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategorySlug(String slug);
    List<Product> findByNameContainingIgnoreCase(String name);
}
