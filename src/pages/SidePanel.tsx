import { SidePanel } from 'src/components/SidePanel'

export const SidePanelPage = () => {
    return (
        <div
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
            }}
        >
            <div style={{ flexShrink: 0 }}>
                <SidePanel>
                    <div>サイドパネル</div>
                </SidePanel>
            </div>
            <div
                style={{
                    padding: '48px',
                }}
            >
                コンテンツ
            </div>
        </div>
    )
}
