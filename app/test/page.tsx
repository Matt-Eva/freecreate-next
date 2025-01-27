import React from "react";

const TestPage: React.FC = () => {
  return (
    <div className="flex h-screen">
      <aside className="w-52 bg-gray-100 p-5">
        <nav>
          <ul className="list-none p-0">
            <li>
              <a href="#" className="text-green-500 no-underline">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="text-green-500 no-underline">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="text-green-500 no-underline">
                Link 3
              </a>
            </li>
          </ul>
        </nav>
      </aside>
      <main className="flex-grow">
        <header className="bg-gray-100 p-2.5 flex items-center">
          <h1 className="text-darkgreen-500 m-0">freecreate</h1>
        </header>
        <section className="p-5">
          <h2>Welcome to the Test Page</h2>
          <p>This is a sample page with a sidebar and a top navbar.</p>
        </section>
      </main>
    </div>
  );
};

export default TestPage;
