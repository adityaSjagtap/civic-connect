import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Issue, CATEGORY_CONFIG, STATUS_CONFIG } from '@/types/issue';

// Fix for default marker icons
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const createCustomIcon = (status: Issue['status']) => {
  const colors = {
    reported: '#ef4444',
    'in-progress': '#eab308',
    resolved: '#22c55e',
  };

  return L.divIcon({
    className: 'custom-marker',
    html: `
      <div style="
        background-color: ${colors[status]};
        width: 32px;
        height: 32px;
        border-radius: 50% 50% 50% 0;
        transform: rotate(-45deg);
        border: 3px solid white;
        box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      ">
        <div style="
          transform: rotate(45deg);
          display: flex;
          align-items: center;
          justify-content: center;
          height: 100%;
          color: white;
          font-size: 14px;
        ">
          ${status === 'reported' ? '!' : status === 'in-progress' ? '⏳' : '✓'}
        </div>
      </div>
    `,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
};

interface IssueMapProps {
  issues: Issue[];
  center?: [number, number];
  zoom?: number;
  height?: string;
  selectedIssueId?: string;
  onIssueSelect?: (issue: Issue) => void;
}

const IssueMap = ({
  issues,
  center = [40.7128, -74.006],
  zoom = 12,
  height = '500px',
  onIssueSelect,
}: IssueMapProps) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<L.Map | null>(null);
  const markersRef = useRef<L.Marker[]>([]);
  const [isReady, setIsReady] = useState(false);

  // Initialize map
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    const map = L.map(mapContainerRef.current).setView(center, zoom);
    
    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    }).addTo(map);

    mapRef.current = map;
    setIsReady(true);

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  // Update center and zoom
  useEffect(() => {
    if (mapRef.current) {
      mapRef.current.setView(center, zoom);
    }
  }, [center, zoom]);

  // Update markers
  useEffect(() => {
    if (!mapRef.current || !isReady) return;

    // Clear existing markers
    markersRef.current.forEach((marker) => marker.remove());
    markersRef.current = [];

    // Add new markers
    issues.forEach((issue) => {
      const marker = L.marker([issue.location.lat, issue.location.lng], {
        icon: createCustomIcon(issue.status),
      });

      const popupContent = `
        <div style="min-width: 200px; font-family: system-ui, sans-serif;">
          <div style="display: flex; gap: 8px; margin-bottom: 8px;">
            <span style="
              background-color: ${
                issue.status === 'reported' ? '#ef4444' : 
                issue.status === 'in-progress' ? '#eab308' : '#22c55e'
              };
              color: ${issue.status === 'in-progress' ? 'black' : 'white'};
              padding: 2px 8px;
              border-radius: 9999px;
              font-size: 12px;
              font-weight: 600;
            ">${STATUS_CONFIG[issue.status].label}</span>
            <span style="font-size: 14px;">${CATEGORY_CONFIG[issue.category].icon}</span>
          </div>
          <h4 style="font-weight: 600; font-size: 14px; margin: 0 0 4px 0;">${issue.title}</h4>
          <p style="font-size: 12px; color: #666; margin: 0 0 8px 0; line-height: 1.4;">
            ${issue.description.substring(0, 100)}${issue.description.length > 100 ? '...' : ''}
          </p>
          <div style="display: flex; align-items: center; gap: 4px; font-size: 12px; color: #666;">
            <span>👍 ${issue.upvotes} upvotes</span>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      
      marker.on('click', () => {
        onIssueSelect?.(issue);
      });

      marker.addTo(mapRef.current!);
      markersRef.current.push(marker);
    });
  }, [issues, isReady, onIssueSelect]);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-card" style={{ height }}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />

      {/* Legend */}
      <div className="absolute bottom-4 left-4 bg-card/95 backdrop-blur rounded-lg p-3 shadow-card z-[1000]">
        <p className="text-xs font-semibold mb-2 text-foreground">Status Legend</p>
        <div className="flex flex-col gap-1.5">
          {Object.entries(STATUS_CONFIG).map(([key, config]) => (
            <div key={key} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full"
                style={{
                  backgroundColor:
                    key === 'reported'
                      ? '#ef4444'
                      : key === 'in-progress'
                      ? '#eab308'
                      : '#22c55e',
                }}
              />
              <span className="text-xs text-muted-foreground">{config.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IssueMap;
