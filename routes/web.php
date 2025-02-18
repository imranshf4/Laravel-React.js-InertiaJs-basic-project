<?php

use App\Http\Controllers\PostController;
use App\Http\Controllers\ProfileController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/about', function () {
    return Inertia::render('About/About');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});



Route::controller(PostController::class)->group(function () {
    Route::get('/', 'index');
    Route::get('/contact', 'Contact');
    Route::get('/about', 'About');
    Route::get('/posts', 'postIndex')->name('posts.index');  // For listing posts
    Route::get('/add/post', 'addPost');  // For listing posts
    Route::post('/post/store', 'postStore'); // For creating a new post
    Route::get('/post/edit/{id}', 'postEdit'); // For editing a post
    Route::post('/update/post/{post_id}', 'postUpdate'); // For updating a post
    Route::get('/delete/post/{post_id}', 'postDestroy'); // For deleting a post
});

require __DIR__.'/auth.php';
