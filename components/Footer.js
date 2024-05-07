

export const Footer = () => {
    const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-100  py-4 mt-24">
        <div className="container mx-auto text-center px-4">
            <p>&copy; {currentYear} Аренда Недвижимости. Все права защищены.</p>
        </div>
    </footer>
  )
}
