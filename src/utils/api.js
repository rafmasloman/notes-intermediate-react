const NotesAPI = {
  baseURL: 'https://notes-api.dicoding.dev/v1',
  setAccessToken: (accessToken) => {
    return localStorage.setItem('token', accessToken);
  },
  getAccessToken: () => {
    return localStorage.getItem('token');
  },
  fetchToken: async (url, options = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        ...options.headers,
        Authorization: `Bearer ${NotesAPI.getAccessToken()}`,
      },
    });
  },
  register: async ({ name, email, password }) => {
    const user = await fetch(`${NotesAPI.baseURL}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      }),
    });

    const response = await user.json();

    return response;
  },
  login: async ({ email, password }) => {
    const user = await fetch(`${NotesAPI.baseURL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const response = await user.json();

    return response;
  },
  getUserLogged: async () => {
    const user = await NotesAPI.fetchToken(`${NotesAPI.baseURL}/users/me`);

    const response = await user.json();
    console.log(response.status);
    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response.data };
  },
  createNote: async ({ title, body }) => {
    const notes = await NotesAPI.fetchToken(`${NotesAPI.baseURL}/notes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        body,
      }),
    });

    const response = await notes.json();

    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response };
  },
  getAllNotes: async () => {
    const notes = await NotesAPI.fetchToken(`${NotesAPI.baseURL}/notes`);
    const response = await notes.json();
    return response;
  },
  getNotesById: async (id) => {
    const notes = await NotesAPI.fetchToken(`${NotesAPI.baseURL}/notes/${id}`);
    const response = await notes.json();
    return response;
  },
  getArchivedNotes: async () => {
    const notes = await NotesAPI.fetchToken(
      `${NotesAPI.baseURL}/notes/archived`,
    );
    const response = await notes.json();

    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response };
  },
  archivedNote: async (id) => {
    const note = await NotesAPI.fetchToken(
      `${NotesAPI.baseURL}/notes/${id}/archive`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const response = await note.json();

    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response };
  },
  unArchivedNote: async (id) => {
    const note = await NotesAPI.fetchToken(
      `${NotesAPI.baseURL}/notes/${id}/unarchive`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const response = await note.json();

    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response };
  },
  deleteNotes: async (id) => {
    const notes = await NotesAPI.fetchToken(`${NotesAPI.baseURL}/notes/${id}`, {
      method: 'DELETE',
    });
    const response = await notes.json();
    console.log(response);
    if (response.status !== 'success') {
      return { error: true, data: null };
    }

    return { error: false, data: response };
  },
};

module.exports = { NotesAPI };
