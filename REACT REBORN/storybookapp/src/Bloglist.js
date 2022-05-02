 const Bloglist = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{ title } </h2>
            {blogs.map((blog) => (
                <div className="app-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p>By { blogs.owner } </p>
                    <button onClick={() => handleDelete(blog.id)}>delete choice</button>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;