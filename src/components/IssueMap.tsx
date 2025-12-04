import { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Issue, CATEGORY_CONFIG, STATUS_CONFIG } from '@/types/issue';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ExternalLink } from 'lucide-react';
import { useIssues } from '@/contexts/IssueContext';
import { Link } from 'react-router-dom';

// Fix for default marker icons in React-Leaflet
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

interface MapControllerProps {
  center?: [number, number];
  zoom?: number;
}

const MapController = ({ center, zoom }: MapControllerProps) => {
  const map = useMap();
  
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || map.getZoom());
    }
  }, [center, zoom, map]);
  
  return null;
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
  selectedIssueId,
  onIssueSelect,
}: IssueMapProps) => {
  const { upvoteIssue } = useIssues();
  const mapRef = useRef<L.Map>(null);

  return (
    <div className="relative rounded-lg overflow-hidden shadow-card" style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: '100%', width: '100%' }}
        ref={mapRef}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <MapController center={center} zoom={zoom} />
        
        {issues.map((issue) => (
          <Marker
            key={issue.id}
            position={[issue.location.lat, issue.location.lng]}
            icon={createCustomIcon(issue.status)}
            eventHandlers={{
              click: () => onIssueSelect?.(issue),
            }}
          >
            <Popup>
              <div className="min-w-[250px]">
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant={issue.status as 'reported' | 'in-progress' | 'resolved'}>
                    {STATUS_CONFIG[issue.status].label}
                  </Badge>
                  <span className="text-sm">{CATEGORY_CONFIG[issue.category].icon}</span>
                </div>
                
                <h4 className="font-semibold text-sm mb-1">{issue.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-3">
                  {issue.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => upvoteIssue(issue.id)}
                    className="h-8 px-2 text-xs"
                  >
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    {issue.upvotes}
                  </Button>
                  <Link to={`/issues/${issue.id}`}>
                    <Button variant="outline" size="sm" className="h-8 px-2 text-xs">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

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
