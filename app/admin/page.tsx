import Link from "next/link";

export default function AdminDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
        Control panel
      </h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Manage your site content from here.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <Link
          href="/admin/blog"
          className="block p-6 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:border-accent-blue/50 dark:hover:border-accent-cyan/50 transition-colors"
        >
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Blog
          </h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Create, edit, and delete blog posts.
          </p>
        </Link>
      </div>
    </div>
  );
}
