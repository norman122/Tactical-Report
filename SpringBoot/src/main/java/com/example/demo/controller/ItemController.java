package com.example.demo.controller;

import com.example.demo.entity.Item;
import com.example.demo.exception.ItemNotFoundException;
import com.example.demo.service.ItemService;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/items") // Base URL for all endpoints
public class ItemController {

    private final ItemService itemService;

    // Constructor injection of the service layer
    public ItemController(ItemService itemService) {
        this.itemService = itemService;
    }

    // POST /api/items: Create a new item
    @PostMapping
    public ResponseEntity<Item> createItem(@Valid @RequestBody Item item) {
        Item savedItem = itemService.createItem(item);
        return ResponseEntity.ok(savedItem); // Return 200 OK with the saved item
    }

    // GET /api/items/{id}: Retrieve an item by its ID
    @GetMapping("/{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id) {
        Item item = itemService.getItemById(id)
                .orElseThrow(() -> new ItemNotFoundException("Item with ID " + id + " not found"));
        return ResponseEntity.ok(item);
    }

    // GET /api/items: Retrieve all items
    @GetMapping
    public ResponseEntity<List<Item>> getAllItems() {
        List<Item> items = itemService.getAllItems();
        return ResponseEntity.ok(items); // Return 200 OK with all items
    }

    // PUT /api/items/{id}: Update an existing item by its ID
    @PutMapping("/{id}")
    public ResponseEntity<Item> updateItem(@PathVariable String id, @Valid @RequestBody Item item) {
        Item updatedItem = itemService.updateItem(id, item);
        return ResponseEntity.ok(updatedItem); // Return 200 OK with the updated item
    }

    // DELETE /api/items/{id}: Delete an item by its ID
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteItem(@PathVariable String id) {
        itemService.deleteItem(id);
        return ResponseEntity.noContent().build(); // Return 204 No Content after deletion
    }
}
