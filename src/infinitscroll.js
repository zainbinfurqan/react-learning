import React, { useEffect, useState } from "react";

function HomePage() {
    const [data, setData] = useState([]);
    let [page, setPage] = useState(1);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        fetchData(page);
    }, []);

    function fetchData(page) {
        console.log(page)
        fetch(`https://randomuser.me/api/?page=${page}&results=20`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                } else {
                    return Promise.reject({
                        status: res.status,
                        statusText: res.statusText
                    });
                }
            })
            .then((res) => {
                if (page > 1) {
                    let resultAr = [...data, ...res.results];
                    setData(resultAr);
                } else {
                    setData(res.results);
                }
                setLoader(false);
            })
            .catch((err) => console.log("Error, with message:", err.statusText));
    }
    const loadMoreHandle = (i) => {
        let bottom =
            i.target.scrollHeight - i.target.clientHeight - i.target.scrollTop < 50;
        if (bottom) {
            let page_ = page + 1;
            fetchData(page_);
            setLoader(true);
            setPage(page_);
        }
    }
    return (
        <div onScroll={loadMoreHandle} className="table-wrap" style={{ overflowY: 'auto', height: '200px' }} >
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Profile pic</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((itm) => {
                        return (
                            <tr>
                                <td>{itm.name["first"]}</td>
                                <td>{itm.gender}</td>
                                <td>
                                    <img src={itm.picture["thumbnail"]} />
                                </td>
                            </tr>
                        );
                    })}
                    <div class="d-flex justify-content-center">
                        <div class="spinner-border" role="status">
                            <span class="sr-only"></span>
                        </div>
                    </div>
                </tbody>
            </table>
        </div >
    );
}

// render(<HomePage />, document.getElementById("root"));
export default HomePage;
