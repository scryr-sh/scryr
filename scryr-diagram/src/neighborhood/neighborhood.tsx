import { menetherenBlueprints } from "../blueprint/menetherenBlueprint.ts";
import { Building } from "./Building.tsx";
import { Blueprint } from "../blueprint/blueprintTypes.ts";
import { currentTheme } from "./theme.ts";
import { createFacades } from "../facade/createFacades.ts";
import { Ground } from "./Ground.tsx";

export function Neighborhood() {
  const blprnts: Blueprint[] = menetherenBlueprints;

  const Neighbors = createFacades(blprnts, currentTheme);

  return (
    <>
      <axesHelper args={[15]} />
      <gridHelper args={[50, 50]} />
      <Ground />
      {Neighbors.map((neighbor, index) => (
        <Building
          key={index}
          position={[
            neighbor.suggestedPosition[0],
            1,
            neighbor.suggestedPosition[2],
          ]}
          color={neighbor.suggestedBuildingColor}
          name={neighbor.name}
          icon={neighbor.icon}
          description={neighbor.description}
          version={neighbor.version || ""}
          sourceCodeUrl={neighbor.sourceCodeUrl}
          language={neighbor.language}
          frameworks={neighbor.frameworks?.map(f => f.name)}
          links={neighbor.links}
          docs={neighbor.docs}
          fontColor={currentTheme.fontColor}
          fontFace={currentTheme.fontFace}
        />
      ))}
    </>
  );
}
