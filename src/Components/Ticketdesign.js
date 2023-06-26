import React, { useState } from 'react';
import './ui.css'
function BookTicket() {
    const [selectedValues, setSelectedValues] = useState({});

    const handleClick = (e) => {
        const button = e.target.closest('button');
        const name = button.getAttribute('name');
        const value = button.getAttribute('value');
        setSelectedValues((prevValues) => ({ ...prevValues, [name]: value }));

        // Loại bỏ class 'selected' khỏi tất cả các button trong cùng div
        const div = button.closest('div');
        const divButtons = div.querySelectorAll('button');
        divButtons.forEach((divButton) => {
            divButton.classList.remove('selected');
        });

        // Thêm class 'selected' cho button được click
        button.classList.add('selected');
    };

    const handleSubmit = () => {
        if (
            selectedValues["btn_day"] &&
            selectedValues["btn_time"]
        ) {
            // all values have been selected, redirect to another page or perform other actions
            const id = document.querySelector('input[name="movie_id"]').value;
            const url = `bookseat.php?day=${selectedValues["btn_day"]}&time=${selectedValues["btn_time"]}&m_id=${id}`;
            window.location.href = url;
        } else {
            alert("Please select an option from each div");
        }
    };

    return (
        <section className="book-ticket">
            <div className="container">
                <img class="logo" src="/picture/3e1b693d-9dc1-43e7-b517-763a153989af-removebg-preview (2).png" alt=""/>
                <div class="text">MOVIES</div>
          
                <div className="book-ticket-container">
                    <h1>Vé xem phim</h1>
                    <div className="show-date">
                        <h2>Mã đặt vé:</h2>
                        <div className="date-list">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Tên phim:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Rạp:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Ngày:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Suất Chiếu:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Số lượng:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <div className="show-time">
                        <h2>Ghế:</h2>
                        <div className="time">
                            {/* Rest of the code */}
                        </div>
                    </div>
                    <center><button id="submit-btn" onClick={handleSubmit}>Ok</button></center>
                </div>
            </div>
        </section>
    );
}

export default BookTicket;
