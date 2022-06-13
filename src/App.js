import React, { useState, useEffect } from 'react';
import './index.css';


const App = () => {
	// HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity
    const [items, setItems] = useState([]);
    const [inputValue, setInputValue] = useState('');
	const [lists, setLists] = useState([]);
    const [listValue, setListValue] = useState('');
    const [boards, setBoards] = useState([]);
    const [boardValue, setBoardValue] = useState('');

    const reactBoardsArray = boards.map((data) => {
        return (
            <div class="card">
                 <div class="col-sm-2">
                    <div class="card">
                        <div class="card-body">
                            <a class="btn btn-primary" onClick={() => handleAddList()} >Add List</a>
                            <input value={listValue} id={listValue} onChange={(event) => setListValue(event.target.value)} className='add-item-input flex' placeholder='Name List' style={{ width: '3cm' }} />
                            <h5 class="card-title">{listValue}</h5>
                            <p class="card-text">
                                <div className='add-item-box flex'>
                                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                    <a class="btn btn-primary" onClick={() => handleAddButtonClick()}>Add Task</a>
                                </div>
                                <div className='item-list'>
                                    {items.map((item, index) => (


                                        <div className='item-container'>
                                            <div className='item-name' >



                                                <strong><span>{item.itemName}</span></strong>


                                                <button key={index} className="item" onClick={() => handleRight(index)} class=" btn btn-outline-secondary btn-sm"> → </button>

                                                <block>
                                                    <button key={index} className="item" onClick={() => handleDelete(index)} class=" btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                </block>

                                            </div>





                                        </div>
                                    ))}
                                </div>


                            </p>

                        </div>
                    </div>
                </div>
                <div>{reactListArray}</div>
                </div>

                );
    });

	const reactListArray = lists.map((data) => {
		return (
			<div className='main-container'>
                <div class="col-sm-2">
                    <div class="card">
                        <div class="card-body">
                            <a class="btn btn-primary" onClick={() => handleAddList()} >Add List</a>
                            <input value={listValue} id={listValue} onChange={(event) => setListValue(event.target.value)} className='add-item-input flex' placeholder='Name List' style={{ width: '3cm' }} />
                            <h5 class="card-title">{listValue}</h5>
                            <p class="card-text">
                                <div className='add-item-box flex'>
                                    <input value={inputValue} onChange={(event) => setInputValue(event.target.value)} className='add-item-input flex' placeholder='Add a task...' style={{ width: '3cm' }} />
                                    <a class="btn btn-primary" onClick={() => handleAddButtonClick()}>Add Task</a>
                                </div>
                                <div className='item-list'>
                                    {items.map((item, index) => (


                                        <div className='item-container'>
                                            <div className='item-name' >



                                                <strong><span>{item.itemName}</span></strong>


                                                <button key={index} className="item" onClick={() => handleRight(index)} class=" btn btn-outline-secondary btn-sm"> → </button>

                                                <block>
                                                    <button key={index} className="item" onClick={() => handleDelete(index)} class=" btn btn-outline-secondary btn-sm"> Delete Task </button>
                                                </block>

                                            </div>





                                        </div>
                                    ))}
                                </div>


                            </p>

                        </div>
                    </div>
                </div>
			</div>
		);
	});


	const handleAddButtonClick = () => {
		const newItem = {
			itemName: inputValue,
			quantity: 1,
			isSelected: false,
		};

		const newItems = [...items, newItem];

		setItems(newItems);
		setInputValue('');
		
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

    const handleAddBoard = () => {
        const newBoard = {
            itemName: boardValue,
            quantity: 1,
            isSelected: false,
        };

        const newBoards = [...boards, newBoard];

        setBoards(newBoards);
        setBoardValue('');
    };

    const handleDelete = (itemIndex) => {

        let updatedItems = [...items];
        updatedItems.splice(itemIndex, 1);
        setItems(updatedItems);

    }

    const handleDeleteSprint = (itemIndex) => {

        let updatedItems = [...nextSprints];
        updatedItems.splice(itemIndex, 1);
        setNextSprint(updatedItems);

    }

    const handleDeleteDev = (itemIndex) => {

        let updatedItems = [...nextDevs];
        updatedItems.splice(itemIndex, 1);
        setDev(updatedItems);

    }

    const handleDeleteTest = (itemIndex) => {

        let updatedItems = [...nextTests];
        updatedItems.splice(itemIndex, 1);
        setTest(updatedItems);

    }

    const handleDeleteReview = (itemIndex) => {

        let updatedItems = [...nextReviews];
        updatedItems.splice(itemIndex, 1);
        setReview(updatedItems);

    }

    const handleDeleteDone = (itemIndex) => {

        let updatedItems = [...nextDone];
        updatedItems.splice(itemIndex, 1);
        setNextSprint(updatedItems);

    }

    const [nextSprints, setNextSprint] = useState([]);
    const [sprintValue, setSprintValue] = useState('');
    const handleSprintButtonClick = () => {
        const newSprint = {
            itemName: sprintValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextSprints, newSprint];

        setNextSprint(newItems);
        setSprintValue('');

    };

    const [nextDevs, setDev] = useState([]);
    const [devValue, setDevValue] = useState('');
    const handleDevButtonClick = () => {
        const newDev = {
            itemName: devValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextDevs, newDev];

        setDev(newItems);
        setDevValue('');

    };

    const [nextTests, setTest] = useState([]);
    const [testValue, setTestValue] = useState('');
    const handleTestButtonClick = () => {
        const newTest = {
            itemName: testValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextTests, newTest];

        setTest(newItems);
        setTestValue('');

    };


    const [nextReviews, setReview] = useState([]);
    const [reviewValue, setReviewValue] = useState('');
    const handleReviewButtonClick = () => {
        const newReview = {
            itemName: reviewValue,
            quantity: 1,
            isSelected: false,
        };

        const newItems = [...nextReviews, newReview];

        setReview(newItems);
        setReviewValue('');

    };

    const [nextDone, setDone] = useState([]);
    const [doneValue, setDoneValue] = useState('');
    const handleDoneButtonClick = () => {
        const newDone = {
            itemName: doneValue,

        };

        const newItems = [...nextDone, newDone];

        setDone(newItems);
        setDoneValue('');

    };

    const handleRight = (itemIndex) => {

        const newSprint = items[itemIndex];

        const newItems = [...nextSprints, newSprint];

        setNextSprint(newItems);

        let updatedItems = [...items];
        updatedItems.splice(itemIndex, 1);
        setItems(updatedItems);




    }


	return (
		<div className='app-background'>


			

			<row>

                <a class="btn btn-primary" onClick={() => handleAddBoard()} >Add Board</a>
				
					 
              
                
			    

				<div>{reactBoardsArray}</div>

				</row>
		</div>
	);
};

export default App;