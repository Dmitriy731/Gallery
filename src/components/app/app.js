import { useState, useEffect } from 'react';
import Header from '../header/header';
import Menu from '../menu/menu';
import Gallery from '../gallery/gallery';
import Page from '../page/page';
import './style.css';
import './app.css';


const App = (props) => {
  
  const [toggle, setToggle] = useState(false);

  const [author, setAuthor] = useState([]);
  const [location, setLocation] = useState([]);

  const [gallery, setGallery] = useState([]); // Галерея
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); // Странница начинается с 1, пагинация
  const [countriesPerPage] = useState(9); //Количество картин на странице

  const [filterName, setFilterName] = useState(gallery); // Стейт с галереей
  const [onSearchName, setOnSearchName] = useState(''); // Поиск по названию
  const [onSearchAutor, setOnSearchAutor] = useState({id: 999, name: 'Autor'}); // Поиск по автору
  const [onSearchLocation, setOnSearchLocation] = useState({id: 998, location: 'Location'}); // Поиск по автору
  const [onSearchFrom, setOnSearchFrom] = useState(''); // Поиск по created from
  const [onSearchBefore, setOnSearchBefore] = useState(''); // Поиск по created before

  // Данные с сервера
  useEffect(() => {
    fetch(`https://test-front.framework.team/authors`)
      .then(res => res.json())
      .then(result => setAuthor([{id: 999, name: 'Autor'},...result]));
    fetch(`https://test-front.framework.team/locations`)
      .then(res => res.json())
      .then(result => setLocation([{id: 998, location: 'Location'},...result]));
      fetch(`https://test-front.framework.team/paintings`)
      .then(res => res.json())
      .then(result => setGallery(result));
  },[]);

  useEffect(() => { 
    const getCounteries = async () => {
      setLoading(true)
      const res = gallery
      setGallery(res);
      setLoading(false)
    }
    getCounteries();
  },[gallery]);

  useEffect(() => { 
    searchEmp()
  },[gallery, onSearchName, onSearchAutor, onSearchLocation, onSearchFrom, onSearchBefore]);

  // Поиск по названию
  const onUpdadeSearch = (onSearchName) => {
    setOnSearchName(onSearchName)
  }
  const onAutorSearch = (autor) => {
    setOnSearchAutor(autor)
  }
  const onLocationSearch = (location) => {
    setOnSearchLocation(location)
  }
  const onFromSearch = (from) => {
    setOnSearchFrom(from)
  }
  const onBeforeSearch = (before) => {
    setOnSearchBefore(before)
  }
  const searchEmp = () => {
    if (onSearchName === '' && onSearchAutor.id === 999 && onSearchLocation.id === 998 && onSearchFrom === '' && onSearchBefore === '') {
      return setFilterName(gallery)
    }
    setFilterName(gallery.filter(item => 
       item.name.toLowerCase().indexOf(onSearchName.toLowerCase()) > -1
    && item.authorId === ((onSearchAutor.id === 999) ? item.authorId : onSearchAutor.id)
    && item.locationId === ((onSearchLocation.id === 998) ? item.locationId : onSearchLocation.id)
    && Number(item.created) >= ((onSearchFrom==='') ? 1 : Number(onSearchFrom)) 
    && Number(item.created) <= ((onSearchBefore==='') ? 9999 : Number(onSearchBefore))))
  }


  // Пагинация
  const lastCountryIndex = currentPage * countriesPerPage
  const firstCountryIndex = lastCountryIndex - countriesPerPage
  const currentCountry = filterName.slice(firstCountryIndex, lastCountryIndex)

  const page = pageNumbers => setCurrentPage(pageNumbers)
  const nextPage = () => setCurrentPage( prev => prev + 1)
  const prevPage = () => setCurrentPage( prev => prev - 1)
  const firstPage = () => setCurrentPage( prev => (prev = 1))
  const lastPage = () => setCurrentPage( prev => prev = (Math.ceil((gallery.length)/countriesPerPage)))
  const totalPage = (Math.ceil(gallery.length/countriesPerPage))


  const onThemeChange = () => {
    setToggle(!toggle);
  }

    return (
        <div className={`${toggle ? "light-theme" : "dark-theme"}`}>
            <Header onThemeChange={onThemeChange}/>
            <Menu author={author} location={location} onUpdadeSearch={onUpdadeSearch} onAutorSearch={onAutorSearch} onLocationSearch={onLocationSearch} onFromSearch={onFromSearch}onBeforeSearch={onBeforeSearch}/>
            <Gallery author={author} location={location} gallery={currentCountry} loading={loading}/>
            <Page totalPage={totalPage} page={page} nextPage={nextPage} prevPage={prevPage} firstPage={firstPage} lastPage={lastPage}/>
        </div>
    );
}

export default App;