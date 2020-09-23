import {useState,useEffect} from 'react'
import axios from 'axios'

function useSearch(type) {
  const [value, setValue] = useState('')
  const [searchResult,setSearchResult] = useState('')

  const customerSearch = () => {
		axios
			.get('https://jsonplaceholder.typicode.com/posts')
			.then(res => {
        console.log(res)
        if(value.length>10){
          axios
          .get('https://jsonplaceholder.typicode.com/posts')
          .then(res => {
            setSearchResult("Address Api : " + res.data[value.length].body)
          })
          .catch({})  
        }else{
          setSearchResult("Customer Api : " + res.data[value.length+10].body)
        }
        
			})
			.catch(err => {
				console.log(err)
			})
	}

  useEffect(customerSearch, [value])

  const showResult = () => {
    setSearchResult("Result From Search Button : " + value)
  } 
  
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value)
    }
  }
  return [value, searchResult, bind, showResult]
}

export default useSearch