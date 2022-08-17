let links = document.querySelectorAll('a');

links.forEach(element => {
    {
        let href = element.getAttribute('href');
        if (!href) return 0; // нет атрибута
        if (!href.includes('https://')) return 0; // нет протокола      
        element.style.color = 'red';
    }
}); 
