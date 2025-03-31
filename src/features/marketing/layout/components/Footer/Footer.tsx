function Footer() {
  return (
    <footer className="border-t bg-white px-6 py-4 text-center text-sm text-gray-500">
      <p>&copy; {new Date().getFullYear()} Kansha. All rights reserved.</p>

      <div className="mt-2 space-x-4">
        <a href="/privacy" className="hover:text-gray-800">
          Privacy
        </a>
        <a href="/terms" className="hover:text-gray-800">
          Terms
        </a>
        <a href="/contact" className="hover:text-gray-800">
          Contact
        </a>
      </div>
    </footer>
  );
}

export default Footer;
