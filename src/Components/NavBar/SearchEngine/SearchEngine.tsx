import React, { useState } from 'react'
import { useMutation } from 'react-query';
import { Search } from 'semantic-ui-react';
import { IUser } from '../../../types/UserTypes';
import { IUserSearchDetails } from '../types';
import { searchQuery } from './api'

const LIMIT = 5;
const AMOUNT = 8;

const SearchEngine = () => {
    const [options, setOptions] = useState<Array<any>>([{label: 'akin', value: 'nvm'}])
    const searchUser = useMutation((data : IUserSearchDetails) => searchQuery(data),{
        onError: (e) => console.log(e),
        onSuccess: (e : any) => {
            const tempArray : Array<any> = [];
            e.map((userDetails: IUser) => {
                tempArray.push({label: userDetails.userName, value: userDetails.userName})
        })
    setOptions(tempArray)}
    })
    //@ts-ignore
    const onSearch = (value) => {
        searchUser.mutateAsync({amount: AMOUNT, limit: LIMIT, keyWord: value})
      };
      //@ts-ignore
    const onChange = (value) =>{
        console.log(value)
    }

    return (
        <div style={{minWidth: '200px'}}>
        <Search
        components={{ DropdownIndicator:() => null, IndicatorSeparator:() => null }}
        placeholder="Search User"
        cacheOptions
        onChange={onChange}
        //@ts-ignore
        loadOptions={options}
        onInputChange={onSearch}
        />
        </div>
    )
}

export default SearchEngine
