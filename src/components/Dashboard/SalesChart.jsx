import React from 'react'
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from 'recharts';
const data = [
    { name: 'Electronics', value: 40, color: '#3b82f6' },  // blue
    { name: 'Clothing', value: 25, color: '#10b981' },     // green
    { name: 'Home & Garden', value: 15, color: '#f59e0b' },// amber
    { name: 'Toys', value: 10, color: '#ef4444' },         // red
    { name: 'Sports', value: 7, color: '#8b5cf6' },        // violet
    { name: 'Books', value: 3, color: '#14b8a6' },         // teal
];


const SalesChart = () => {
    return (
        <div className='bg-white dark:bg-slate-900 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50'>
            <div className='mb-6'>
                <h3 className='text-sm text-slate-500 dark:text-slate-300'>Sales by category</h3>
                <p className='text-sm text-slate-500 dark:text-slate-400'>Production Distribution</p>
            </div>

            <div className='h-48'>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={40}
                            outerRadius={80}
                            paddingAngle={5}
                            dataKey="value"
                        >
                            {
                                data.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.color} />
                                ))
                            }
                        </Pie>

                        <Tooltip
                            contentStyle={{
                                backgroundColor: "rgba(255, 255, 255, 0.95)",
                                border: "none",
                                borderRadius: "12px",
                                boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
                            }}
                            itemStyle={{ color: "#6b7280", fontSize: "14px" }}
                            formatter={(value, name) => [`${value}%`, name]}
                        />

                    </PieChart>
                </ResponsiveContainer>
            </div>

            <div className='space-y-3'>
                {
                    data.map((item, index) => {
                        return (
                            <div className='flex items-center justify-between' key={index}>
                                <div className='flex items-center space-x-3'>
                                    <div className='w-3 h-3 rounded-full' style={{ backgroundColor: item.color }}></div>
                                    <span className='text-sm text-slate-600 dark:text-slate-400'> {item.name} </span>
                                </div>
                                <div className='text-sm text-slate-600 dark:text-white'>
                                    {item.value}%
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default SalesChart
