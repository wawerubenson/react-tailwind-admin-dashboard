import { Bell, Clock, CreditCard, MessageCircle, Package, Settings, ShoppingBag, ShoppingCart, Star, User, UserCheck } from 'lucide-react'
import React from 'react'

const activities = [
    {
        id: 1,
        type: "user",
        icon: User,
        title: "New User Registered",
        description: "John Doe has registered an account.",
        time: "2 hours ago",
        color: "bg-blue-500",
        bgColor: "bg-blue-100 dark:bg-blue-900/20"
    },
    {
        id: 2,
        type: "order",
        icon: ShoppingCart,
        title: "New Order Placed",
        description: "Order #12345 has been placed by Jane Smith.",
        time: "3 hours ago",
        color: "bg-green-500",
        bgColor: "bg-green-100 dark:bg-green-900/20"
    },
    {
        id: 3,
        type: "payment",
        icon: CreditCard,
        title: "Payment Received",
        description: "Payment of $1200 received from Michael Brown.",
        time: "5 hours ago",
        color: "bg-emerald-500",
        bgColor: "bg-emerald-100 dark:bg-emerald-900/20"
    },
    {
        id: 4,
        type: "alert",
        icon: Bell,
        title: "Low Stock Alert",
        description: "Stock for 'Wireless Mouse' is running low.",
        time: "6 hours ago",
        color: "bg-yellow-500",
        bgColor: "bg-yellow-100 dark:bg-yellow-900/20"
    },
    {
        id: 5,
        type: "product",
        icon: Package,
        title: "New Product Added",
        description: "‘Bluetooth Speaker’ has been added to inventory.",
        time: "8 hours ago",
        color: "bg-purple-500",
        bgColor: "bg-purple-100 dark:bg-purple-900/20"
    },
    {
        id: 6,
        type: "support",
        icon: MessageCircle,
        title: "Support Ticket Created",
        description: "Emily Johnson opened a new support ticket.",
        time: "10 hours ago",
        color: "bg-orange-500",
        bgColor: "bg-orange-100 dark:bg-orange-900/20"
    },
    {
        id: 7,
        type: "review",
        icon: Star,
        title: "New Product Review",
        description: "David Lee left a 5-star review for 'Smartwatch'.",
        time: "12 hours ago",
        color: "bg-pink-500",
        bgColor: "bg-pink-100 dark:bg-pink-900/20"
    },
    {
        id: 8,
        type: "order",
        icon: ShoppingBag,
        title: "Order Shipped",
        description: "Order #12346 has been shipped to Olivia Davis.",
        time: "14 hours ago",
        color: "bg-indigo-500",
        bgColor: "bg-indigo-100 dark:bg-indigo-900/20"
    },
    {
        id: 9,
        type: "user",
        icon: UserCheck,
        title: "User Verified",
        description: "Sophia Wilson’s email has been verified.",
        time: "18 hours ago",
        color: "bg-teal-500",
        bgColor: "bg-teal-100 dark:bg-teal-900/20"
    },
    {
        id: 10,
        type: "system",
        icon: Settings,
        title: "System Update Completed",
        description: "The dashboard system was updated successfully.",
        time: "1 day ago",
        color: "bg-gray-500",
        bgColor: "bg-gray-100 dark:bg-gray-900/20"
    }
];

const ActivityFeed = () => {
    return (
        <div className='bg-white dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50'>
            <div className='p-6 border-b border-slate-200/50 dark:border-slate-700/50'>
                <div>
                    <h3 className='text-lg font-bold text-slate-500 dark:text-slate-400'>Activity Feed</h3>
                    <p className='text-sm text-slate-500 dark:text-slate-400'>Recent System Activity</p>
                </div>

                <button className='text-blue-400 hover:text-blue-700 text-sm font-medium'>View All</button>
            </div>

            <div className='p-6'>
                <div className='space-y-4'>
                    {
                        activities.map((activity, index) => {
                            return (
                                <div className='flex items-center space-x-4 p-3 rounded-xl hover:bg-slate-800/50 transition-colors' key={index}>
                                    <div className={`p-2 rounded-lg ${activity.bgColor}`}>
                                        <activity.icon className={`w-4 h-4 ${activity.color}`} />
                                    </div>
                                    <div className='flex-1 min-w-0'>
                                        <h4 className='text-sm font-semi-bold text-slate-800 dark:text-white'> {activity.title} </h4>
                                        <p className='text-sm text-slate-600 dark:text-slate-400 truncate'> {activity.description} </p>
                                        <div className='flex items-center-safe space-x-1 mt-1'>
                                            <Clock className='w-3 h-3 text-slate-400' />
                                            <span className='text-xs text-slate-500 dark:text-slate-400'>
                                                {activity.time}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ActivityFeed
