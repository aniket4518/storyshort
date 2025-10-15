import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-12 px-4 bg-white dark:bg-[#18181b] border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1">
            <h3 className="text-xl font-bold mb-2 text-black dark:text-white">StoryShort</h3>
            <p className="text-sm text-orange-500 mb-2">Copyright © 2024 StoryShort</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">All rights reserved</p>
          </div>

          {/* Column 2 */}
          <div className="col-span-1">
            <ul className="space-y-3">
              <li>
                <Link href="/pricing" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Tools
                </Link>
              </li>
              <li>
                <Link href="/community" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Community
                </Link>
              </li>
              <li>
                <Link href="/video-generator" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  AI Video Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 */}
          <div className="col-span-1">
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Refund Policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate" className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
                  Affiliate Program{" "}
                  <span className="inline-block ml-1 px-2 py-0.5 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 text-xs font-semibold rounded">
                    New
                  </span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 */}
          <div className="col-span-1">
            <ul className="space-y-3">
              <li>
                <Link href="/twitter" className="text-sm text-blue-500 hover:text-blue-600 transition-colors">
                  Twitter
                </Link>
              </li>
              <li>
                <Link href="/linkedin" className="text-sm text-blue-600 hover:text-blue-700 transition-colors">
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
