import { Component } from 'react';
import Select from 'react-select';
import './menu.css';
import CustomStyle from './customStyle';
import DropdownIndicator from './dropdownIndicator';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false,
        }
    }
   
    createdActive = () => {
        const {toggle} = this.state;
        this.setState({toggle:!toggle})
    }

    onUpdadeSearch = (e) => {
        const onSearchName = e.target.value;
        this.props.onUpdadeSearch(onSearchName)
    }
    onAutorSearch = (author) => {
        this.props.onAutorSearch(author)
    }
    onLocationSearch = (location) => {
        this.props.onLocationSearch(location)
    }
    onFromSearch = (e) => {
        const onSearchFrom = e.target.value;
        this.props.onFromSearch(onSearchFrom)
    }
    onBeforeSearch = (e) => {
        const onSearchBefore = e.target.value;
        this.props.onBeforeSearch(onSearchBefore)
    }

    render () {
        const { toggle, onSearchName, onSearchFrom, onSearchBefore } = this.state;
        const { author, location } = this.props;
        
        return (
            <div className="menu">
                <form action="" className="menu__form">
                    <div className="menu__panel">
                        <input name="get" id="text" type="text" placeholder="Name" value={onSearchName} onChange={this.onUpdadeSearch}/>
                    </div>
                        <Select
                            className="menu__panel_select"
                            classNamePrefix="menu__panel_select"
                            placeholder={'Author'}
                            getOptionLabel={option => option.name}
                            getOptionValue={option => option.id}
                            options={author}
                            styles={CustomStyle}
                            components={{ DropdownIndicator }}
                            onChange={this.onAutorSearch}>
                        </Select>
                        <Select
                            className="menu__panel_select"
                            classNamePrefix="menu__panel_select"
                            placeholder={'Location'}
                            getOptionLabel={option => option.location}
                            getOptionValue={option => option.id}
                            options={location}
                            styles={CustomStyle}
                            components={{ DropdownIndicator }}
                            onChange={this.onLocationSearch}>
                        </Select>
                    <div className={`menu__panel ${toggle ? "menu__panel_created_active" : "menu__panel_created"}`}>
                        <div className="menu__panel_title"
                        onClick={() => {this.createdActive()}}>
                            <div className="menu__panel_descr">Created</div>
                            <div className="menu__panel_indicator">
                                <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.67861 1.8337L5.77064 5.68539C5.34503 6.10487 4.65497 6.10487 4.22936 5.68539L0.321394 1.8337C-0.365172 1.15702 0.121082 -8.36609e-08 1.09203 0L8.90797 6.7345e-07C9.87892 7.57111e-07 10.3652 1.15702 9.67861 1.8337Z" fill="white" fillOpacity="0.3"/>
                                </svg>
                            </div>
                        </div>
                        <div className={`menu__panel_search ${toggle ? " " : "menu__panel_search_none"}`}>
                            <input name="from" type="text" placeholder="from" value={onSearchFrom} onChange={this.onFromSearch}/>
                            <input name="before" type="text" placeholder="before" value={onSearchBefore} onChange={this.onBeforeSearch}/>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


export default Menu;