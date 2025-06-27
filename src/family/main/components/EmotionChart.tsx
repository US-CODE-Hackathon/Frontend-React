import * as S from './style';

import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';

interface MoodData {
  day: string;
  positive: number;
  neutral: number;
}

const chartData: MoodData[] = [
  { day: '월', positive: 70, neutral: 30 },
  { day: '화', positive: 85, neutral: 15 },
  { day: '수', positive: 60, neutral: 40 },
  { day: '목', positive: 90, neutral: 10 },
  { day: '금', positive: 75, neutral: 25 },
  { day: '토', positive: 95, neutral: 5 },
  { day: '일', positive: 80, neutral: 20 },
];

// 커스텀 범례 컴포넌트
const CustomLegend = () => (
  <S.LegendContainer>
    <S.LegendItem>
      <S.LegendDot color="#ffe07d" />
      <S.LegendLabel>긍정</S.LegendLabel>
    </S.LegendItem>
  </S.LegendContainer>
);

const EmotionChart: React.FC = () => (
  <S.ChartContainer>
    <S.ChartHeader>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <S.ChartTitle>일별 변화</S.ChartTitle>
        <S.ChartSubtitle>(최근 7일)</S.ChartSubtitle>
      </div>
      <CustomLegend />
    </S.ChartHeader>

    <div style={{ width: '100%', height: '200px', marginTop: '16px' }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <defs>
            <linearGradient id="colorPositive" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#ffe07d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#ffe07d" stopOpacity={0.1} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="3 3" stroke="#f0f2f5" vertical={false} />

          <XAxis
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: '#9ca3b0',
              fontFamily: 'Inter, sans-serif',
            }}
          />

          <YAxis
            domain={[0, 100]}
            axisLine={false}
            tickLine={false}
            tick={{
              fontSize: 12,
              fill: '#9ca3b0',
            }}
            tickFormatter={value => `${value}%`}
          />

          <Area
            type="monotone"
            dataKey="positive"
            stackId="1"
            stroke="#ffe07d"
            strokeWidth={2}
            fill="url(#colorPositive)"
            fillOpacity={0.6}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  </S.ChartContainer>
);

export default EmotionChart;
