import React, { createContext, useState, useEffect } from 'react'

export const DataContext = createContext();

export const DataProvider = (props) => {
    const sliderImages = [
        { id: 0, src: 'https://images.unsplash.com/photo-1505751171710-1f6d0ace5a85?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ymx1ZXRvb3RoJTIwaGVhZHBob25lc3xlbnwwfHwwfHw%3D&w=1000&q=80' },
        { id: 1, src: 'https://assets.tatacliq.com/medias/sys_master/images/27444789313566.jpg' }
    ]
    const [products, setProducts] = useState([
        {
            "_id": "1",
            "title": "Wacth Product 01",
            "images": [
                "https://m.media-amazon.com/images/I/71s9FMKzr+L._SL1500_.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1tIl49N7bO815pEs33Fb8fzTBe9-Kf53Xfwo3QlrKvFVHJ-C1F0wWG8cm3kmFhh6SYVc&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 101,
            "count": 1,
            "key": false
        },
        {
            "_id": "2",
            "title": "Wacth Product 02",
            "images": [
                "data:image/jpeg;base64,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",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNkmGaQbC4QMtumNdox7LkrhS-mZtJvOZ46phzPSBhYt2xPuoyEXAtkIoDxlpYNCHrmzU&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 102,
            "count": 1,
            "key": false

        },
        {
            "_id": "3",
            "title": "Wacth Product 03",
            "images": [
                "https://cdn.shopify.com/s/files/1/0153/8863/products/Headphone-Zone-EPOS-PC5-CHAT-03_1160x.jpg?v=1644040398",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX6jPEmdvyKf0rW3C6JckyUNo3PJGcJjDxE1Br5Ximhe4LvFStMAnplaPkdmxm2oaJd6A&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 103,
            "count": 1,
            "key": false

        },
        {
            "_id": "4",
            "title": "Wacth Product 04",
            "images": [
                "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTVZjrtFN0yx1mOzGWCKZ8sa-7s4jo36qD4I3KNoBuiswkeEpxqqqyw6BfBHV9BxKOZqY&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 104,
            "count": 1,
            "key": false

        },
        {
            "_id": "5",
            "title": "Wacth Product 05",
            "images": [
                "https://n2.sdlcdn.com/imgs/j/y/a/Matlek-Headphone-Earphone-Bluetooth-Wireless-SDL737194953-1-60c0d.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrSCdSwOiivnTzVXYEn4aoJz-oItPM7R3LiPged0fZweH6bKbMsYiLDCletdAkWiStsig&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 105,
            "count": 1,
            "key": false

        },
        {
            "_id": "6",
            "title": "Wacth Product 06",
            "images": [
                "https://i.pcmag.com/imagery/reviews/03LMEamSJfAavMLXIQbRZwT-1.fit_lim.size_1050x591.v1593021884.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_54dIopigISbvaNz-w9XlSe4tqzWL6K8LBYDDjgcPGs7na5S6ClGTdL1kEBqTpPFwdY&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 106,
            "count": 1,
            "key": false

        },
        {
            "_id": "7",
            "title": "Wacth Product 06",
            "images": [
                "https://i.pcmag.com/imagery/reviews/03LMEamSJfAavMLXIQbRZwT-1.fit_lim.size_1050x591.v1593021884.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_54dIopigISbvaNz-w9XlSe4tqzWL6K8LBYDDjgcPGs7na5S6ClGTdL1kEBqTpPFwdY&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 107,
            "count": 1,
            "key": false

        },
        {
            "_id": "8",
            "title": "Wacth Product 06",
            "images": [
                "https://i.pcmag.com/imagery/reviews/03LMEamSJfAavMLXIQbRZwT-1.fit_lim.size_1050x591.v1593021884.jpg",
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0_54dIopigISbvaNz-w9XlSe4tqzWL6K8LBYDDjgcPGs7na5S6ClGTdL1kEBqTpPFwdY&usqp=CAU"
            ],
            "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            "content": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            "price": 108,
            "count": 1,
            "key": false

        }
    ])

    const [cart, setCart] = useState([])

    const addCart = (id) => {
        const check = cart.every(item => {
            return item._id !== id
        })
        if (check) {
            const data = products.filter(product => {
                return product._id === id
            })
            setCart([...cart, ...data])
        } else {
            alert("The product has been added to cart.")
        }
    }


    useEffect(() => {
        const dataCart = JSON.parse(localStorage.getItem('dataCart'))
        if (dataCart) setCart(dataCart)
    }, [])

    useEffect(() => {
        localStorage.setItem('dataCart', JSON.stringify(cart))
    }, [cart])


    const value = {
        products: [products, setProducts],
        cart: [cart, setCart],
        addCart: addCart,
        sliderImages: [sliderImages]
    }


    return (
        <DataContext.Provider value={value}>
            {props.children}
        </DataContext.Provider>
    )
}