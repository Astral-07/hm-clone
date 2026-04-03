package com.hmclone.controller;

import com.hmclone.model.Order;
import com.hmclone.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@RestController
@RequestMapping("/api/orders")
@RequiredArgsConstructor
@CrossOrigin(origins = "${app.cors.allowed-origins}")
public class OrderController {

    private final OrderRepository orderRepository;

    @GetMapping("/user/{userId}")
    public List<Order> getUserOrders(@PathVariable Long userId) {
        return orderRepository.findByUserId(userId);
    }

    @PostMapping
    public Order placeOrder(@RequestBody Order order) {
        order.setStatus("PENDING");
        return orderRepository.save(order);
    }
}
