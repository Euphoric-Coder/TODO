import React from 'react'
import Todo from './components/Todo'

const App = () => {
  return (
    <div className="bg-gradient-to-br from-[#0a1a3a] to-[#357dd3] grid py-4 min-h-screen items-center justify-center">
      <Todo />
    </div>
  );
}

export default App