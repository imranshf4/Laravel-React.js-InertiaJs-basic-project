<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Http\Requests\StorePostRequest;
use App\Http\Requests\UpdatePostRequest;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Home');
    }

    /**
     * Show the form for creating a new resource.
     */
    
    public function About()
    {
        return Inertia::render('About/About');
    }

    public function Contact()
    {
        return Inertia::render('Contact');
    }

    // posts index
    public function postIndex()
    {
        return inertia('Posts/Index', [
            'posts' => Post::all()
        ]);
    }
    
    //add post
    public function addPost(){
        return inertia('Posts/AddPost');
    }

    //post data store
    public function postStore(Request $request) {

        Post::insert([
            'body' => $request->body,
            "created_at" => Carbon::now(),
        ]);
        return redirect()->route('posts.index');
    }

    public function postEdit($id) {
        $editPost = Post::findOrFail($id);
        return inertia('Posts/EditPost', compact('editPost'));
    }

    //update post
    public function postUpdate(Request $request,$post_id) {

        Post::findOrFail($post_id)->update([
            'body' => $request->body,
        ]);
        return redirect()->route('posts.index');
    }

    //delete post
    public function postDestroy($post_id) {
        Post::findOrFail($post_id)->delete();
        return redirect()->back();
    }
   
}
