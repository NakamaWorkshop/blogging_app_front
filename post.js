window.Post = class Pete {
  constructor({ title, body }) {
    this.title = title;
    this.body  = body;
  }

  static load() {
    this._loadPosts().forEach(p => new this(p).append());
  }

  static _loadPosts() {
    let posts = LS.get('posts');
    return posts && posts.constructor === Array ? posts : [];
  }

  save() {
    this._persist();
    this.append();
  }

  append() {
    var $post = $(`
      <div class='post'>
        <h3>${this.title}</h3>
        <p>${this.body}</p>
      </div>
    `);

    $('.posts-container').append($post);
  }

  _persist() {
    const posts = this.constructor._loadPosts();
    posts.push(this);
    LS.set('posts', posts)
  }
};
