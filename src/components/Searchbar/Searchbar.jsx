import { Component } from "react";
import { toast } from 'react-hot-toast';

import {Header, Form, Input, Btn, BtnLable} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleInputSearch = (e) => {
    this.setState({
      query: e.currentTarget.value
    })
  };

  hendleSubmit = (e) => {
    const { onSubmit } = this.props;
    const { query } = this.state;
    e.preventDefault();

    if (this.state.query.trim() === '') {
      toast.error('ВВЕДІТЬ ПОШУКОВИЙ ЗАПИТ!!!!');
      return
    };
    
    onSubmit(query);
    this.reset();

  };

  reset = () => {
    this.setState({ query: '' })
  };

  render(){
    return (
      <Header>
        <Form
          onSubmit={this.hendleSubmit}
        >
          <Btn type="submit">
            <BtnLable>Search</BtnLable>
          </Btn>
          <Input
            value={this.state.query}
            name="query"
            onChange={this.handleInputSearch}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  };
};