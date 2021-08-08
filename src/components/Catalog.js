import React, { Component } from 'react'
import '../styles/catalog.css'
import { Movie } from './Movie'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export class Catalog extends Component {
    constructor(){
        super()
        this.state = {
            search: "",
            budget: 13,
            amount: 3
        }
    }
    displayRented = movies => {
        return (
            <div>
                <h5>Rented:</h5>
                <div className="catalog">
                    {movies.map(movie => { 
                        return movie.isRented ? <Movie match={this.props.match} isRented={this.props.isRented} key={movie.id} movie={movie} rent={this.rent}/> : null 
                    })
                    }
                </div>
                <hr />
            </div>
        )
    }

    handleEvent = async event => {
        let target = event.target
        let value = target.value
        let key = target.name

        await this.setState({ [key]: value})

    }

    serach = movie => {
        const title = movie.title.toLowerCase() 
        const searchText = this.state.search
        
        return searchText === "" ?  true : (title.indexOf(searchText) > -1 ? true : false) 
    }

    rent = id => {
        let state = this.state
        let moviesArray = [...this.props.state.movies]
        let budget = this.state.budget

        moviesArray[id].isRented ? this.changeBudget(id, state.amount) : ( budget - state.amount < 0 ? this.alert(): this.changeBudget(id, -this.state.amount) ) 
   
    }

    changeBudget = (id, budget) => {
        let updateBudget = this.state.budget
        updateBudget += budget
        this.props.isRented(id)

        this.setState({
            budget: updateBudget
        })

    }

    alert = () =>{
        MySwal.fire({
            didOpen: () => {
                MySwal.clickConfirm()
            }
        }).then(() => {
            return MySwal.fire(<p>Your rent is not allowed, there is not enough money</p>)
        })
          
    }

    render() {
        const state = this.props.state
        const areMoviesRented = state.areMoviesRented
        let movies = state.movies

        return ( 
            <div>
                <div className="search-budget">
                    <input name="search" placeholder="Search" onChange={this.handleEvent}/>
                    <div className="budget">Budget: ${this.state.budget} </div>
                </div>
                
                {areMoviesRented ? this.displayRented(movies) : null}
                
               
                <h5>Catalog:</h5>
                <div className="catalog">
                    {movies.map(movie => this.serach(movie) ? <Movie match={this.props.match} isRented={this.props.isRented} key={movie.id} movie={movie} rent={this.rent} /> : null)}
                </div>
            
            </div>
        )
    }
}