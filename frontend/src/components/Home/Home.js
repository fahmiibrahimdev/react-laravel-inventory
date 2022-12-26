const Home = () => {
    return (
        <div>
            <div className="J4EyOFkg">
                <div className="tw-text-lg tw-p-5">
                    Table name
                </div>

                <div className="show-entries">
                    <p className="show-entries-show">Show</p>
                    <select id="length-data">
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                        <option value="250">250</option>
                        <option value="500">500</option>
                        <option value="1000">1000</option>
                    </select>
                    <p className="show-entries-entries">Entries</p>
                </div>

                <div className="search-column">
                    <p>Search: </p>
                    <input type="search" id="search-data" placeholder="Search here..." />
                </div>
                
                <div className="yUsYh8tC">
                    <table>
                        <thead>
                            <tr>
                                <th width="10%">No</th>
                                <th width="15%">Judul</th>
                                <th width="35%">Deskripsi</th>
                                <th>Author</th>
                                <th>Status Publish</th>
                                <th>
                                    <i className='far fa-cogs'></i>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mengenal Tag, Atribut, dan Element</td>
                                <td>Tag, atribut dan elemen merupakan 3 komponen utama dalam HTML. Semua kode HTML y...</td>
                                <td>Fahmi Ibrahim</td>
                                <td>Draft</td>
                                <td>
                                    <button className='yzJL6fZq'>
                                        <i className='fas fa-edit'></i>
                                    </button>
                                    <button className='Vsl3d6Y0'>
                                        <i className='fas fa-trash'></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Membuat Struktur Dasar HTML</td>
                                <td>Dalam menulis dokumen HTML kita harus mengikuti standar yang sudah ditetapkan ol...</td>
                                <td>Fahmi Ibrahim</td>
                                <td>Draft</td>
                                <td>
                                    <button className='yzJL6fZq'>
                                        <i className='fas fa-edit'></i>
                                    </button>
                                    <button className='Vsl3d6Y0'>
                                        <i className='fas fa-trash'></i>
                                    </button>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Mengenal Elemen Head pada HTML dan Fungsinya</td>
                                <td>Elemen head adalah elemen HTML yang berfungsi sebagai tempat untuk meletakkan...</td>
                                <td>Fahmi Ibrahim</td>
                                <td>Draft</td>
                                <td>
                                    <button className='yzJL6fZq'>
                                        <i className='fas fa-edit'></i>
                                    </button>
                                    <button className='Vsl3d6Y0'>
                                        <i className='fas fa-trash'></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Home