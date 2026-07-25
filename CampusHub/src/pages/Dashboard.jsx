import { useEffect, useMemo, useReducer, useState } from 'react'
import Sidebar from '../components/Sidebar'
import TaskSection from '../components/TaskSection'
import ResourceList from '../components/ResourceList'
import { useFetch } from '../hooks/useFetch'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { taskReducer } from '../reducers/taskReducer'
import { Tasks } from './Tasks'
import { Resources } from './Resources'
import { Profile } from './Profile'

const defaultResources = [
  { id: 1, title: 'React Docs', category: 'Frontend', url: 'https://react.dev' },
  { id: 2, title: 'MDN Web Docs', category: 'Web', url: 'https://developer.mozilla.org' }
]

export default function Dashboard({ user, onLogout }) {
  const [theme, setTheme] = useState('light')
  const [storedUser] = useLocalStorage('campushub-user', user)
  const [storedTasks, setStoredTasks] = useLocalStorage('campushub-tasks', [])
  const [storedResources, setStoredResources] = useLocalStorage('campushub-resources', defaultResources)
  const [resourceForm, setResourceForm] = useState({ title: '', category: '', url: '' })
  const [resourceFilter, setResourceFilter] = useState('All')
  const [resourceSearch, setResourceSearch] = useState('')
  const [currentPage, setCurrentPage] = useState('dashboard')
  const { data: posts } = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [tasks, dispatchTasks] = useReducer(taskReducer, storedTasks)

  useEffect(() => {
    setStoredTasks(tasks)
  }, [tasks, setStoredTasks])

  const completedTasks = tasks.filter((task) => task.completed).length
  const pendingTasks = tasks.length - completedTasks

  const handleAddTask = (task) => {
    dispatchTasks({ type: 'ADD_TASK', payload: task })
  }

  const handleDeleteTask = (id) => {
    dispatchTasks({ type: 'DELETE_TASK', payload: id })
  }

  const handleUpdateTask = (task) => {
    dispatchTasks({ type: 'UPDATE_TASK', payload: task })
  }

  const handleToggleTask = (id) => {
    dispatchTasks({ type: 'TOGGLE_TASK', payload: id })
  }

  const handleAddResource = (event) => {
    event.preventDefault()
    if (!resourceForm.title.trim() || !resourceForm.url.trim()) {
      return
    }

    setStoredResources((current) => [
      ...current,
      {
        id: Date.now(),
        title: resourceForm.title.trim(),
        category: resourceForm.category || 'General',
        url: resourceForm.url.trim()
      }
    ])
    setResourceForm({ title: '', category: '', url: '' })
  }

  const filteredResources = useMemo(() => {
    let result = [...storedResources]

    if (resourceSearch.trim()) {
      const term = resourceSearch.toLowerCase()
      result = result.filter((resource) => resource.title.toLowerCase().includes(term))
    }

    if (resourceFilter !== 'All') {
      result = result.filter((resource) => resource.category === resourceFilter)
    }

    return result
  }, [resourceFilter, resourceSearch, storedResources])

  const handleThemeToggle = () => {
    setTheme((value) => (value === 'light' ? 'dark' : 'light'))
  }

  return (
    <div className={`app-shell ${theme}`}>
      <Sidebar
        studentName={storedUser?.name || 'Student'}
        onThemeToggle={handleThemeToggle}
        theme={theme}
        setCurrentPage={setCurrentPage}
      />
      <main className="main-content">
        {currentPage === 'tasks' ? (
          <Tasks tasks={tasks} dispatch={dispatchTasks} studentName={storedUser?.name || 'Student'} />
        ) : currentPage === 'resources' ? (
          <Resources resources={storedResources} setResources={setStoredResources} />
        ) : currentPage === 'profile' ? (
          <Profile user={storedUser} />
        ) : (
          <>
            <header className="hero-panel">
              <div>
                <p className="eyebrow">CampusHub dashboard</p>
                <h1>Welcome back, {storedUser?.name || 'Student'}!</h1>
                <p>Here is a quick snapshot of your academic plan.</p>
              </div>
              <button type="button" onClick={onLogout}>Logout</button>
            </header>

            <section className="stats-grid">
              <article className="stat-card">
                <h3>Total tasks</h3>
                <p>{tasks.length}</p>
              </article>
              <article className="stat-card">
                <h3>Completed</h3>
                <p>{completedTasks}</p>
              </article>
              <article className="stat-card">
                <h3>Pending</h3>
                <p>{pendingTasks}</p>
              </article>
            </section>

            <TaskSection
              studentName={storedUser?.name || 'Akash'}
              tasks={tasks}
              onAddTask={handleAddTask}
              onDeleteTask={handleDeleteTask}
              onToggleTask={handleToggleTask}
              onUpdateTask={handleUpdateTask}
            />

            <p className="prop-note">
              Prop-drilling note: passing the student name through intermediate components keeps the data flow explicit, but it can make updates harder as the component tree grows.
            </p>

            <section className="card-section">
              <div className="section-header">
                <h3>Resource library</h3>
                <p>Bookmark useful learnings and references.</p>
              </div>

              <form className="form-grid" onSubmit={handleAddResource}>
                <input
                  value={resourceForm.title}
                  placeholder="Resource title"
                  onChange={(event) => setResourceForm({ ...resourceForm, title: event.target.value })}
                />
                <input
                  value={resourceForm.category}
                  placeholder="Category"
                  onChange={(event) => setResourceForm({ ...resourceForm, category: event.target.value })}
                />
                <input
                  value={resourceForm.url}
                  placeholder="URL"
                  onChange={(event) => setResourceForm({ ...resourceForm, url: event.target.value })}
                />
                <button type="submit">Add resource</button>
              </form>

              <div className="toolbar">
                <input
                  value={resourceSearch}
                  placeholder="Search resources"
                  onChange={(event) => setResourceSearch(event.target.value)}
                />
                <select value={resourceFilter} onChange={(event) => setResourceFilter(event.target.value)}>
                  <option value="All">All categories</option>
                  <option value="Frontend">Frontend</option>
                  <option value="Web">Web</option>
                  <option value="General">General</option>
                </select>
              </div>

              <ResourceList
                resources={filteredResources}
                onDeleteResource={(id) => setStoredResources((current) => current.filter((resource) => resource.id !== id))}
              />
            </section>

            <section className="card-section">
              <div className="section-header">
                <h3>Recent posts</h3>
                <p>Fetched with a custom hook.</p>
              </div>
              <div className="post-list">
                {posts.slice(0, 10).map((post) => (
                  <article key={post.id} className="post-card">
                    <h4>{post.title}</h4>
                    <p>{post.body}</p>
                  </article>
                ))}
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  )
}
