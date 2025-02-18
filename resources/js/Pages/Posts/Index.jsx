import React from 'react';
import { Link } from '@inertiajs/react';
import Swal from 'sweetalert2';

const Index = ({ posts }) => {

  const handleDelete = (e, postId) => {
    e.preventDefault();  // Prevent default link behavior

    Swal.fire({
      title: 'Are you sure?',
      text: "Delete This Data?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        // Perform the actual delete operation here (e.g., navigate to delete URL or call API)
        window.location.href = `/delete/post/${postId}`;
        
        // Optionally, show a success message after deletion
        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
  };

  return (
    <div className="container mx-auto p-4">
      <Link className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg text-center mb-4 transition-colors" href="/add/post">
        Add Post
      </Link>
      <h1 className="text-2xl font-semibold mb-4">All Posts</h1>

      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-gray-100 border-b">
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Body</th>
              <th className="px-4 py-2 text-left">Created At</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 ? (
              posts.map((post, index) => (
                <tr key={post.id} className="border-b hover:bg-gray-50">
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">{post.body}</td>
                  <td className="px-4 py-2">{new Date(post.created_at).toLocaleTimeString()}</td>
                  <td className="px-4 py-2 space-x-4">
                    <Link className="inline-block px-6 py-2 text-white bg-blue-500 hover:bg-blue-700 rounded-lg text-center mb-4 transition-colors" href={`/post/edit/${post.id}`}>
                      Edit
                    </Link>

                    {/* Modify the delete button to call handleDelete */}
                    <Link
                      onClick={(e) => handleDelete(e, post.id)}
                      className="inline-block px-6 py-2 bg-red-600 text-white hover:bg-red-700 rounded-lg text-center mb-4 transition-colors"
                    >
                      Delete
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No posts available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Index;
