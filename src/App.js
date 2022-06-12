import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
	const [items, setItems] = useState([
	]);
	const [items1, setItems1] = useState([
	]);
	const [lists, setLists] = useState([]);

	const reactListArray = lists.map((data) => {
		return (
			<div className='main-container'>
				<div className='add-item-box'>
					<input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input' placeholder='Add an item...' />
					<button onClick={() => handleAddButtonClick()}> </button>
				</div>
				{lists.map((item, index) => (
					<div className='item-list'>
						{items.map((item, index) => (
							<div className='item-container'>
								<div className='item-name' onClick={() => toggleComplete(index)}>
									{item.isSelected ? (
										<>

											<span className='completed'>{item.itemName}</span>
										</>
									) : (
										<>

											<span>{item.itemName}</span>
										</>
									)}
								</div>
								<div className='quantity'>
									<button onClick={() => handleQuantityDecrease(index)}>
									</button>
									<span> {item.quantity} </span>
									<button onClick={() => handleQuantityIncrease(index)}>
									</button>
								</div>
							</div>
						))}
					</div>
				))}
				<div className='total'>Total: {totalItemCount}</div>
			</div>
		);
	});

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(0);

	const [inputValue1, setInputValue1] = useState('');
	const [totalItemCount1, setTotalItemCount1] = useState(0);

	const [listValue, setListValue] = useState('');

	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		calculateTotal();
	};
	const handleAddList = () => {
		const newList = {
			itemName: listValue,
			quantity: 1,
			isSelected: false,
		};

		const newLists = [...lists, newList];

		setLists(newLists);
		setListValue('');
	};
	const handleAddButtonClick1 = () => {
		const newItem1 = {
			itemName: inputValue1,
			quantity: 1,
			isSelected: false,
		};

		const newItems1 = [...items1, newItem1];

		setItems1(newItems1);
		setInputValue('');
		calculateTotal();
	};


	const handleQuantityIncrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity++;

		setItems(newItems);
		calculateTotal();
	};

	const handleQuantityDecrease = (index) => {
		const newItems = [...items];

		newItems[index].quantity--;

		setItems(newItems);
		calculateTotal();
	};

	const toggleComplete = (index) => {
		const newItems = [...items];

		newItems[index].isSelected = !newItems[index].isSelected;

		setItems(newItems);
	};

	const calculateTotal = () => {
		const totalItemCount = items.reduce((total, item) => {
			return total + item.quantity;
		}, 0);

		setTotalItemCount(totalItemCount);
	};

	return (
		<div className='app-background'>


			



			<div className='add-item-box'>
				<input value={listValue} onChange={(event) => setListValue(event.target.value)} className='add-item-input' placeholder='Add a list...' />
				<button onClick={() => handleAddList()}> </button>
			</div>

			<div>{reactListArray}</div>
		</div>
	);
};

export default App;