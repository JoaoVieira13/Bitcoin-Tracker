export interface Bitcoin {
    ask: number;
    bid: number;
    last: number;
    high: number;
    low: number;
    volume: number;
    open: {
        hour: number;
        day: number;
        week: number;
        month: number;
        month_3: number;
        month_6: number;   
        year: number;             
    };  
    averages: {
        day: number;
        week: number;
        month: number;
    };
    changes: {
        price: {
            hour: number;
            day: number;
            week: number;
            month: number;
            month_3: number;
            month_6: number;   
            year: number;               
        };
        percent: {
            hour: number;
            day: number;
            week: number;
            month: number;
            month_3: number;
            month_6: number;   
            year: number;      
        };        
    };
    volume_percent: number;
    timestamp: number;
    display_timestamp: string;
    display_symbol: string;
}
