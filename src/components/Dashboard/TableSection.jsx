import { MoreHorizontal, TrendingUp } from 'lucide-react'
import React from 'react'

const recentOrders = [
    {
        orderId: "#12345",
        customer: "John Doe",
        product: "Laptop",
        amount: "$1200",
        status: "Shipped",
        date: "2024-06-15"
    },
    {
        orderId: "#12346",
        customer: "Jane Smith",
        product: "Smartphone",
        amount: "$850",
        status: "Processing",
        date: "2024-06-17"
    },
    {
        orderId: "#12347",
        customer: "Michael Brown",
        product: "Wireless Headphones",
        amount: "$250",
        status: "Delivered",
        date: "2024-06-18"
    },
    {
        orderId: "#12348",
        customer: "Emily Johnson",
        product: "Gaming Console",
        amount: "$600",
        status: "Cancelled",
        date: "2024-06-20"
    },
    {
        orderId: "#12349",
        customer: "David Lee",
        product: "Smartwatch",
        amount: "$300",
        status: "Delivered",
        date: "2024-06-21"
    },
    {
        orderId: "#12350",
        customer: "Sophia Wilson",
        product: "Bluetooth Speaker",
        amount: "$150",
        status: "Shipped",
        date: "2024-06-23"
    },
    {
        orderId: "#12351",
        customer: "James Miller",
        product: "Tablet",
        amount: "$450",
        status: "Processing",
        date: "2024-06-25"
    },
    {
        orderId: "#12352",
        customer: "Olivia Davis",
        product: "Monitor",
        amount: "$300",
        status: "Delivered",
        date: "2024-06-26"
    },
    {
        orderId: "#12353",
        customer: "Liam Garcia",
        product: "Mechanical Keyboard",
        amount: "$120",
        status: "Delivered",
        date: "2024-06-27"
    },
    {
        orderId: "#12354",
        customer: "Ava Martinez",
        product: "Office Chair",
        amount: "$220",
        status: "Shipped",
        date: "2024-06-28"
    },
    {
        orderId: "#12355",
        customer: "Noah Anderson",
        product: "4K TV",
        amount: "$900",
        status: "Delivered",
        date: "2024-06-30"
    },
    {
        orderId: "#12356",
        customer: "Isabella Thomas",
        product: "External Hard Drive",
        amount: "$100",
        status: "Processing",
        date: "2024-07-01"
    },
    {
        orderId: "#12357",
        customer: "Mason Taylor",
        product: "Wireless Mouse",
        amount: "$60",
        status: "Delivered",
        date: "2024-07-02"
    },
    {
        orderId: "#12358",
        customer: "Charlotte Moore",
        product: "Desk Lamp",
        amount: "$45",
        status: "Shipped",
        date: "2024-07-03"
    },
    {
        orderId: "#12359",
        customer: "Ethan Jackson",
        product: "Router",
        amount: "$110",
        status: "Delivered",
        date: "2024-07-04"
    }
];

const topProducts = [
    {
        name: "Wireless Headphones",
        sales: 1200,
        revenue: "$36,000",
        change: "+8%",
        trend: "up"
    },
    {
        name: "Smartphone",
        sales: 950,
        revenue: "$28,500",
        change: "-3%",
        trend: "down"
    },
    {
        name: "Laptop",
        sales: 1100,
        revenue: "$33,000",
        change: "+5%",
        trend: "up"
    },
    {
        name: "Smartwatch",
        sales: 780,
        revenue: "$23,400",
        change: "-1%",
        trend: "down"
    },
    {
        name: "Bluetooth Speaker",
        sales: 1340,
        revenue: "$40,200",
        change: "+10%",
        trend: "up"
    },
    {
        name: "Gaming Console",
        sales: 670,
        revenue: "$20,100",
        change: "-4%",
        trend: "down"
    },
    {
        name: "Tablet",
        sales: 890,
        revenue: "$26,700",
        change: "+2%",
        trend: "up"
    },
    {
        name: "4K Monitor",
        sales: 1020,
        revenue: "$30,600",
        change: "+6%",
        trend: "up"
    }
];

const TableSection = () => {
    return (
        <div className='space-y-6'>
            <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Recent Orders</h3>
                            <p className='text-sm text-slate-500 dark:text-slate-400'>Latest Customer Orders</p>
                        </div>
                        <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>View All</button>
                    </div>
                </div>

                {/* Table */}
                <div className='overflow-x-auto'>
                    <table className='w-full'>
                        <thead >
                            <tr>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Order Id</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Product</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Amount</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Status</th>
                                <th className='text-left p-4 text-sm font-semibold text-slate-600'>Date</th>
                            </tr>
                        </thead>

                        <tbody>
                            {
                                recentOrders.map((order, index) => {
                                    return (
                                        <tr className='border-b border-slate-200/50 dark:border-slate-700/50 hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors' key={index}>
                                            <td className='p-4'>
                                                <span className='text-sm font-medium text-blue-600 dark:text-white'> {order.orderId} </span>
                                            </td>

                                            <td className='p-4'>
                                                <span className='text-sm font-medium text-slate-800 dark:text-white'> {order.product} </span>
                                            </td>

                                            <td className='p-4'>
                                                <span className='text-sm text-slate-800 dark:text-white'>{order.amount}</span>
                                            </td>

                                            <td className='p-4'>
                                                <span className='text-sm text-slate-800 dark:text-white'> {order.status} </span>
                                            </td>

                                            <td className='p-4'>
                                                <span className={`text-slate-400 dark:text-white font-medium text-sx px-3 py-1 rounded-full`}> {order.date}</span>
                                            </td>

                                            <td className='p-4'>
                                                <span className='text-sm text-slate-800 dark:text-white'> <MoreHorizontal className='w-4 h-4' /> </span>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>

                    </table>
                </div>
            </div>

            {/* Top products */}
            <div className='bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden'>
                <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                    <div className='flex items-center justify-between'>
                        <div className='text-lg font-bold text-slate-800 dark:text-white'>
                            <h3 className='text-lg font-bold text-slate-800 dark:text-white'>Top Products</h3>
                        </div>
                        <p className='text-sm text-slate-500 dark:text-slate-400'>
                            Best performing products this month
                        </p>
                    </div>
                    <button className='text-blue-600 hover:text-blue-700 text-sm font-medium'>
                        View All
                    </button>
                </div>

                {/*  Dynamic data */}
                <div className='p-6 space-y-4'>
                    {
                        topProducts.map((product, index) => {
                            return (
                                <div className='flex items-center justify-between p-4 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors' key={index}>
                                    <div className='flex-1'>
                                        <h4 className='text-sm font-semibold text-slate-800 dark:text-white'> {product.name} </h4>
                                        <p className='text-xs text-slate-500 dark:text-slate-400'> {product.sales} </p>
                                    </div>
                                    <div className='text-right'>
                                        <p className='text-sm font-semibold text-slate-800 dark:text-white'> {product.revenue} </p>
                                        <div className='flex items-center space-x-1'>

                                            {product.trend === "up" ? (<TrendingUp className='w-3 h-3 text-emerald-500' />) : (<TrendingUp className='w-3 h-3 text-red-500' />)}
                                            <span className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}> {product.change} </span>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default TableSection
