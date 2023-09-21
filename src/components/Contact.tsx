import { Title } from "./Title";

export function Contact() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full py-3">
      <div className="flex flex-col items-center justify-center w-full max-w-2xl px-4 mx-auto space-y-8">
        <Title>Contact</Title>
        <p className="text-base font-normal text-center text-stone-500 dark:text-stone-400">
          I'm currently looking for new opportunities, my inbox is always open.
          Whether you have a question or just want to say hi, I'll try my best
          to get back to you!
        </p>
        <form
          className="flex flex-col items-center justify-center w-full max-w-2xl px-4 py-8 mx-auto space-y-4 bg-white border rounded-md shadow-xl border-stone-200 dark:bg-stone-800 dark:border-stone-700"
          action="https://getform.io/f/eaf038a2-7e09-4a0d-a301-86bd879a13ac"
          method="POST"
        >
          <div className="flex flex-col items-start justify-start w-full space-y-1">
            <label
              htmlFor="name"
              className="text-sm font-normal text-stone-500 dark:text-stone-400"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="w-full px-4 py-2 text-base font-normal border rounded-md text-stone-900 placeholder-stone-400 bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-700 focus:ring-stone-500 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-stone-100"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full space-y-1">
            <label
              htmlFor="email"
              className="text-sm font-normal text-stone-500 dark:text-stone-400"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              className="w-full px-4 py-2 text-base font-normal border rounded-md text-stone-900 placeholder-stone-400 bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-700 focus:ring-stone-500 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-stone-100"
              placeholder="Your email"
            />
          </div>
          <div className="flex flex-col items-start justify-start w-full space-y-1">
            <label
              htmlFor="message"
              className="text-sm font-normal text-stone-500 dark:text-stone-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 text-base font-normal border rounded-md text-stone-900 placeholder-stone-400 bg-stone-100 border-stone-200 dark:bg-stone-900 dark:border-stone-700 focus:ring-stone-500 focus:border-stone-500 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:text-stone-100"
              placeholder="Your message"
              rows={6}
            />
          </div>
          <button
            type="submit"
            className="px-6 py-2 text-base font-medium rounded-md bg-gradient-to-r from-purple-900 via-purple-600 to-purple-400 text-stone-100 hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 dark:from-purple-800 dark:via-purple-700 dark:to-purple-600 dark:text-stone-100 dark:hover:opacity-90 dark:focus:ring-purple-500"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
